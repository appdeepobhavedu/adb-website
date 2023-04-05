import { defineConfig } from "tinacms";
import { aboutFields } from "./templates";
import { blog_postFields } from "./templates";
import { contact_usFields } from "./templates";
import { courseFields } from "./templates";
import { featuresFields } from "./templates";
import { homeFields } from "./templates";
import { team_sectionFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "034b3023-c57b-468c-95ff-4c39b3149d1b", // Get this from tina.io
  token: "428dda41d2855c0b9ba87c5075d58e1fdf402631", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "src/pages",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "heading",
            label: "heading",
          },
          {
            type: "string",
            name: "subheading",
            label: "subheading",
          },
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          ...featuresFields(),
          {
            type: "object",
            name: "about_college",
            label: "About College",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
              },
              {
                type: "string",
                name: "sub_heading",
                label: "Sub Heading",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "feature",
                    label: "Feature",
                  },
                ],
              },
              {
                type: "object",
                name: "link",
                label: "Link",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "text",
                  },
                  {
                    type: "string",
                    name: "path",
                    label: "path",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        format: "md",
        label: "About college",
        name: "about_college",
        path: "src/pages/about",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
            required: true,
          },
          {
            type: "string",
            name: "path",
            label: "Path",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          ...team_sectionFields(),
        ],
      },
      {
        format: "md",
        label: "About Trust",
        name: "about_trust",
        path: "src/pages/about-trust",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
            required: true,
          },
          {
            type: "string",
            name: "path",
            label: "Path",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          ...team_sectionFields(),
        ],
      },
      {
        format: "md",
        label: "Words From Chairman",
        name: "words_from_chairman",
        path: "src/pages/words-from-chairman",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
            required: true,
          },
          {
            type: "string",
            name: "path",
            label: "Path",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          ...team_sectionFields(),
        ],
      },
      {
        format: "md",
        label: "Words From VC",
        name: "words_from_vc",
        path: "src/pages/words-from-vice-chairman",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
            required: true,
          },
          {
            type: "string",
            name: "path",
            label: "Path",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          ...team_sectionFields(),
        ],
      },
      {
        format: "md",
        label: "Words From Director",
        name: "words_from_director",
        path: "src/pages/words-from-director",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
            required: true,
          },
          {
            type: "string",
            name: "path",
            label: "Path",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          ...team_sectionFields(),
        ],
      },
      {
        format: "md",
        label: "Message From Principal",
        name: "message_from_principal",
        path: "src/pages/words-from-principal",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
            required: true,
          },
          {
            type: "string",
            name: "path",
            label: "Path",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "image",
            name: "banner_image",
            label: "Banner Image",
          },
          ...team_sectionFields(),
        ],
      },
      {
        format: "md",
        label: "Contact Us",
        name: "contact_us",
        path: "src/pages/contact",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Blog Posts",
        name: "blog_posts",
        path: "src/pages/blog",
        match: {
          include: "**/*",
          exclude: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: "md",
        label: "Courses",
        name: "courses",
        path: "src/pages/course",
        match: {
          include: "**/*",
          exclude: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...courseFields(),
        ],
      },
      {
        format: "md",
        label: "Products",
        name: "products",
        path: "src/pages/products",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
