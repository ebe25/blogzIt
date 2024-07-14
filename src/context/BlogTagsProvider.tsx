import React, { useState } from 'react'
import BlogTagsContext from './BlogTagsContext'
import { Tag } from 'emblor'

type BlogTagsProviderProps = {
  children: React.ReactNode
}

const BlogTagsProvider = ({ children }: BlogTagsProviderProps) => {
  const [blogTags, setBlogTags] = useState<Tag[] | null>(null)
  const [storyTitle, setStoryTitle] = useState<string | null>(null);
  return (
    <BlogTagsContext.Provider value={{ blogTags, setBlogTags, storyTitle, setStoryTitle }}>
      {children}
    </BlogTagsContext.Provider>
  )
}

export default BlogTagsProvider