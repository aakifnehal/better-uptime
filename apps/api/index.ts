import express from 'express';
import { authMiddleware } from './middleware';
import { prismaClient } from "db/client";

const app = express();

app.use(express.json());

//create website endpoint

app.post("/api/v1/website", authMiddleware, async (req, res) => {
  // Logic to create a website
  const userId = req.userId!;
  const { url } = req.body;

    const data = await prismaClient.website.create({
            data: {
                userId,
                url
                // other website fields
            }   
        })

    res.json({
        id: data.id
    })
});


//get website status endpoint
app.get("/api/v1/website/status", authMiddleware, async (req, res) => {
    const websiteId = req.query.websiteId! as unknown as string;
    const userId = req.userId;

    const data = await prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId,
            disabled: false
        },
        include: {
            ticks: true
        }
    })

    res.json(data);
});



//get all existing websites
app.get("/api/v1/websites", authMiddleware, async (req, res) => {
    const userId = req.userId!;
    const websites = await prismaClient.website.findMany({
        where: {
            userId,
            disabled: false
        }
    })

    res.json({
        websites
    });
});


app.delete("/api/v1/website/", authMiddleware, async (req, res) =>{
    const websiteId = req.body.websiteId;
    const userId = req.userId!;

    await prismaClient.website.update({
        where: {
            id: websiteId,
            userId
        },
        data: {
            disabled: true
        } 
    })

    res.json({
        message: "Website disabled successfully"
    });

});


app.listen(3000);