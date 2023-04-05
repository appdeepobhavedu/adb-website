export function aboutFields() {
  return [
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
  ];
}
export function blog_postFields() {
  return [
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
  ];
}
export function contact_usFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "sub_title",
      label: "Sub Title",
    },
    {
      type: "string",
      name: "address_title",
      label: "Address Title",
    },
    {
      type: "string",
      name: "address_details",
      label: "Address Details",
    },
    {
      type: "object",
      name: "email_addresses",
      label: "Email Addresses",
      list: true,
      fields: [
        {
          type: "string",
          name: "e_mails",
          nameOverride: "e-mails",
          label: "E-mails",
        },
      ],
    },
    {
      type: "object",
      name: "phone_no",
      label: "Phone no.",
      list: true,
      fields: [
        {
          type: "string",
          name: "phone_no",
          label: "Phone no.",
        },
      ],
    },
  ];
}
export function courseFields() {
  return [
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
  ];
}
export function featuresFields() {
  return [
    {
      type: "object",
      name: "feature",
      label: "Feature",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
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
          type: "object",
          name: "cta",
          label: "CTA",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Text",
            },
            {
              type: "string",
              name: "url",
              label: "URL",
            },
          ],
        },
      ],
    },
  ];
}
export function homeFields() {
  return [
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
  ];
}
export function team_sectionFields() {
  return [
    {
      type: "string",
      name: "team_heading",
      label: "Team Heading",
    },
    {
      type: "string",
      name: "team_subheading",
      label: "Team Subheading",
    },
    {
      type: "object",
      name: "team_members",
      label: "Team Members",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "intro",
          label: "Intro",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "photo",
          label: "Photo",
        },
      ],
    },
  ];
}
