import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handleAuth = ()=>{
    const {userId } = auth()
    if(!userId) throw new Error("Unauthorized")
    return {userId }
}
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  storyImage: f({ image: { maxFileSize: "4MB" ,maxFileCount:1} })
    // Set permissions and file types for this FileRoute
    .middleware(()=>handleAuth())
    .onUploadComplete( () => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;