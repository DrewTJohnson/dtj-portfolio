const { PrismaClient } = require("@prisma/client");
const { pages } = require('./data.js');
const prisma = new PrismaClient();


const load = async () => {
  try {
    await prisma.page.deleteMany();
    await prisma.page.createMany({
      data: pages
    });

    console.log(pages)

  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

load()
