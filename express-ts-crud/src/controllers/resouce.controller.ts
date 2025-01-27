import { Request, Response } from "express";
import prisma from "../services/prisma.service";
import { Prisma } from "@prisma/client";
import {
  createResourceSchema,
  getAllQuerySchema,
  idQuerySchema,
} from "./validation";

export const createResource = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const resource = await prisma.resource.create({
      data: { name, description },
    });
    res.status(201).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error creating resource", error });
  }
};

export const listResources = async (req: Request, res: Response) => {
  const { take, skip, search, columnSort, valueSort } = getAllQuerySchema.parse(
    req.query
  );

  const andWhereCondition: Prisma.ResourceWhereInput[] = [
    {
      isDeleted: false,
    },
  ];
  if (search) {
    andWhereCondition.push({
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    });
  }
  let orderBy: Prisma.ResourceOrderByWithRelationInput = {
    createdAt: "desc",
  };
  if (columnSort && valueSort) {
    orderBy = {
      [columnSort]: valueSort,
    };
  }
  try {
    const resources = await prisma.resource.findMany({
      where: {
        AND: andWhereCondition,
      },
      orderBy,
      take,
      skip,
    });
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources", error });
  }
};

export const getResource = async (req: Request, res: Response) => {
  try {
    const { id } = idQuerySchema.parse(req.params);

    const resource = await prisma.resource.findFirstOrThrow({
      where: { id: parseInt(id), isDeleted: false },
    });
    if (!resource) res.status(404).json({ error: "Resource not found" });
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resource", error });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const { id } = idQuerySchema.parse(req.params);
    const { name, description } = createResourceSchema.parse(req.body);

    await prisma.resource.findFirstOrThrow({
      where: { id: parseInt(id), isDeleted: false },
    });

    const resource = await prisma.resource.update({
      where: { id: parseInt(id) },
      data: { name, description },
    });

    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Error updating resource", error });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const { id } = idQuerySchema.parse(req.params);
    await prisma.resource.findFirstOrThrow({
      where: { id: parseInt(id), isDeleted: false },
    });

    await prisma.resource.update({
      where: { id: parseInt(id) },
      data: {
        isDeleted: true,
      },
    });
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resource", error });
  }
};
