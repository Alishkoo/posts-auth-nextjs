import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PostList from "./components/postList";
import {Post, PostsContext, Provider} from "./context/posts";
import { use, useContext, useEffect } from "react";
import postService from "./services/postService";

export default function Home() {


  return (
    <>

    <Navbar />
      <PostList />
    <Footer />
    
    </>
  );
}
