import axiosClient from "@/app/services/axiosClient";
import React from "react";
import { Book } from "../../interfaces/types";
import { useEffect } from "react";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';


export default function BookCards() {
    const [bookData, setBookData] = React.useState<Book[]>();

    //fetch data from api
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosClient.get('books', {
              params: {
                pageNumber: 1,
                pageSize: 1000,
              }
            });
            setBookData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []); 
      
    return (
        <List>
          {
            bookData?.map((book) => {
              return (
                  <ListItem sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightblue', borderRadius: '5px', margin: '5px'}}>
                    <ListItemAvatar>
                      <Avatar>
                        <AutoStoriesTwoToneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={book.title} secondary={book.author}/>
                  </ListItem>
              )
            })
          }
        </List>
    )
}
