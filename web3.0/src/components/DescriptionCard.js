import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"

const product = {
  name: "wb2",
  img: "https://ipfs.thirdweb.com/ipfs/bafkreibfmfiq6ff73vvzir22ku2fi4rqhmsplo46c2rddroumqvhssxdq4",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  attribute: [{ price: 10 }],
}

const DescriptionCard = () => {
  const { name, img, description, attribute } = product
  return (
    <>
      <Card
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          m: "16px auto",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="https://ipfs.thirdweb.com/ipfs/bafkreibfmfiq6ff73vvzir22ku2fi4rqhmsplo46c2rddroumqvhssxdq4"
          alt="green iguana"
        />
        <CardContent>
          <Typography component="h1" sx={{ fontSize: 24, fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default DescriptionCard
