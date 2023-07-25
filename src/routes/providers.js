/**
 * @swagger
 * components:
 *   schemas:
 *     Providers:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         url:
 *           type: string
 *           description: The book author
 *       example:
 *         id: apple
 *         name: Apple TV+
 *         url: "https://www.apple.com/apple-tv-plus/"
 */

/**
 * @swagger
 * tags:
 *   name: Providers
 *   description: The providers managing API
 * /api/providers:
 *   get:
 *     summary: Get all the available providers
 *     tags: [Providers]
 *     responses:
 *       200:
 *         description: The list of providers.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Providers'
 *       500:
 *         description: 'Server error'
 *
 */

const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.get("/providers", async function (req, res) {
  try {
    const providers = await prisma.providers.findMany();
    await prisma.$disconnect();
    return res.status(200).json({ data: providers });
  } catch (e) {
    return res.status(400).json({ error: 'An error has ocurred.' });
  }
});

module.exports = router;
