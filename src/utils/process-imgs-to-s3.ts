import { createClient } from "@supabase/supabase-js"
import { JSONContent } from '@tiptap/react'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;


export const supabase = createClient(supabaseUrl, supabaseKey)

export function processImages(imagesToProcess: JSONContent[]) {
    const imgFiles = [];

    for (let [index, image] of imagesToProcess.entries()) {
        if (image.attrs && image.attrs.src) {
            const url = image.attrs.src;

            // Check if the URL is a data URI with a supported image format
            const isDataURI = url.startsWith('data:image/');
            if (isDataURI) {
                const mimeType = url.split(';')[0].split(':')[1];
                const base64Data = url.split(',')[1];

                try {
                    // Attempt conversion to Blob with error handling
                    const bytes = atob(base64Data).split('').map(char => char.charCodeAt(0));
                    const arrayBuffer = new ArrayBuffer(bytes.length);
                    const uint8Array = new Uint8Array(arrayBuffer);
                    uint8Array.set(bytes);

                    imgFiles.push(new File([uint8Array], `blog-image-${++index}`, { type: mimeType }));

                } catch (error) {
                    console.error('Error converting image to Blob:', error);
                }
            }
        }
    }

    return imgFiles;

}

export async function storeImages(imgFile: File, blogName: string ) {
    try {
        const response = await supabase.storage.from(import.meta.env.VITE_SUPABASE_BUCKET).upload(`${blogName}/${imgFile.name}`, imgFile, { contentType: imgFile.type })
        return response.data;
    } catch (error) {
        console.log("error while uplaoding to obj store", error);
        throw error;
    }
}



