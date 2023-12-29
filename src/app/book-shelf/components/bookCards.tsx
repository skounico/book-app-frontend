import axiosClient from "@/app/services/axiosClient";
import React from "react";
import { Book } from "../../interfaces/types";
import { useEffect } from "react";

export default function BookCards() {
    const [bookData, setBookData] = React.useState<Book[]>();

    //fetch data from api
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosClient.get('books', {
              params: {
                pageNumber: 1,
                pageSize: 10,
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
        <div className="w-1/2 text-center">
          {
            bookData?.map((book) => {
              return (
                <div key={book.id} className="flex flex-col border-black border-2">
                  <div className="flex flex-row ml-10">
                    <p>Titulo: </p>
                    <p className="ml-2">{book.title}</p>
                  </div>
                  <div className="flex flex-row ml-10">
                    <p>Autor: </p>
                    <p className="ml-2">{book.author}</p>
                  </div>
                  <div className="flex flex-row ml-10">
                    <p>Páginas: </p>
                    <p className="ml-2">{book.pages}</p>
                  </div>
                  <div className="flex flex-row ml-10">
                    <p>Página atual: </p>
                    <p className="ml-2">{book.currentPage}</p>
                  </div>
                  <div className="flex flex-row ml-10">
                    <p>Adicionado em: </p>
                    <p className="ml-2">{book.createdAt.toString()}</p>
                  </div>
                  <div className="flex flex-row ml-10">
                    <p>Ultima atualização: </p>
                    <p className="ml-2">{book.lastUpdated.toString()}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    )
}
