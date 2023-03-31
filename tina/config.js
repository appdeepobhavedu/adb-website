import { defineConfig } from "tinacms";

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
        label: "Home",
        name: "home",
        path: "src/pages",
        format: "md",
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
        label: "About college",
        name: "about_college",
        path: "src/pages/about",
        format: "md",
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
        ],
      },
      {
        label: "About Trust",
        name: "about_trust",
        path: "src/pages/about-trust",
        format: "md",
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
        ],
      },
      {
        label: "Words From Chairman",
        name: "words_from_chairman",
        path: "src/pages/words-from-chairman",
        format: "md",
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
        ],
      },
      {
        label: "Words From VC",
        name: "words_from_vc",
        path: "src/pages/words-from-vice-chairman",
        format: "md",
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
        ],
      },
      {
        label: "Words From Director",
        name: "words_from_director",
        path: "src/pages/words-from-director",
        format: "md",
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
        ],
      },
      {
        label: "Message From Principal",
        name: "message_from_principal",
        path: "src/pages/words-from-principal",
        format: "md",
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
        ],
      },
      {
        label: "Contact Us",
        name: "contact_us",
        path: "src/pages/contact",
        format: "md",
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
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "boolean",
            name: "featuredpost",
            label: "Is Featured Post",
          },
          {
            type: "image",
            name: "featuredimage",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
        ],
      },
      {
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
          {
            type: "string",
            name: "templateKey",
            label: "templateKey",
          },
          {
            type: "number",
            name: "order",
            label: "Sequence Order",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "acronym",
            label: "Acronym",
          },
          {
            type: "string",
            name: "duration",
            label: "Duration",
          },
          {
            type: "string",
            name: "duration_phrase",
            label: "Duration Phrase",
          },
          {
            type: "number",
            name: "seats",
            label: "Seats",
          },
          {
            type: "string",
            name: "eligibility",
            label: "Eligibility",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "application_and_prospectus_fee",
            label: "Application & Prospectus Fee",
          },
          {
            type: "string",
            name: "admission_fee",
            label: "Admission Fee",
          },
          {
            type: "string",
            name: "per_semester_fee",
            label: "Per Semester Fee",
          },
          {
            type: "string",
            name: "total_fee",
            label: "Total fee",
          },
          {
            type: "string",
            name: "fee_notes",
            label: "Fee Notes",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "hostel_charges",
            label: "Hostel Charges",
          },
          {
            type: "string",
            name: "course_outcomes",
            label: "Course Outcomes",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "career_opportunities",
            label: "Career Opportunities",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "boolean",
            name: "is_featured",
            label: "Is Featured",
          },
          {
            type: "image",
            name: "featuredimage",
            label: "featuredimage",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
        ],
      },
      {
        label: "Products",
        name: "products",
        path: "src/pages/products",
        format: "md",
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
