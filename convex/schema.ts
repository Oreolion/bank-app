import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  transactions: defineTable({
    user: v.id("users"),
    postTitle: v.string(),
    postContent: v.string(),
    postCategory: v.string(),
    postDescription: v.string(),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    imageUrl: v.string(),
    imagePrompt: v.string(),
    views: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_title", { searchField: "postTitle" })
    .searchIndex("search_body", { searchField: "postDescription" })
    .searchIndex("search_category", { searchField: "postCategory" }),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  }),

});
