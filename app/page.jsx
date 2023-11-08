"use client"

import { useEffect, useState } from "react"
import CountButton from "./CountButton"
import CountButton_2 from "./CountButton_2"
import SearchBar from "./SearchBar"



export default function Page() {

    return (
    <div>
      <CountButton />
      <CountButton_2 />

      <a href="https://github.com/mango051296/CSCI_331">my github</a>
      <SearchBar />
      
    </div>
    )
  }