# CHORE

**CRUD on user-blogs:**

- [x] Configure Tiptap inspiration meditor [link](https://meditor.pages.dev/)
  - [x] Navigate: With an object ID once a new blog is clicked on, use that as the blogId
  - **Tags:**
    - [x] Once "publish" is clicked, a sheet/drawer appears.
    - [X] The left side shows the blog card preview, the **STORY PREVIEW**:
      - [X] Preview image: By default, use the first image in the editor.
      - [X] **Story Title:** **<bold>Limit 100 characters, then ...</bold>**
      - [X] **Story content:** **<bold>Limit of 135 characters, then ...</bold>**
    - [X] The right side, A multi-select select box allows the author to choose tags related to the blog.
    --[] Populate the left side with preview image and dynamic title and content-summary
  - **Images:** Supabase object store
    - [] Read all the images from DB
- [ ] Update/Edit: Frontend (DRAFT FEATURE)
- [] Delete
- [] Read: Into dashboard

**Add a save to drafts feature on the editor section**

**Protected Routes and Auth:**

- [x] For Dashboard: One more fetch query that gets posts by the user (ID in params)
- [x] Remove sending email for protected routes: Add that to the backend process

**Other Tasks:**

- [ ] Configure cache validation/invalidation
- [ ] Finish Up Profile Section
- [ ] Add Admin/Regular layout route
- [ ] Add fallbacks and suspense stages
- [ ] Add graceful Error boundaries
