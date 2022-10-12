/*
https://www.netlifycms.org/docs/configuration-options/
Compiles to yaml on build, does not automatically refresh while dev script is running.
*/
export default {
	backend: {
		name: "git-gateway",
		branch: "master",
		repo: "holaplex/enterprise.holaplex.com",
	},
	local_backend: {
		url: 'http://localhost:8081/api/v1',
	},
	media_folder: "public/uploads",
	public_folder: "uploads",
	collections: [
		{
			name: "pages",
			label: "Pages",
			folder: "content/pages",
			create: true,
			fields: [
				{
					label: "Slug",
					name: "slug",
					widget: "string",
				},
				{
					label: "Meta Title",
					name: "title",
					widget: "string",
					description: "The meta title displayed on embeds, browser bar, and search engine titles.",
				},
				{
					label: "Display Title",
					name: "display-title",
					widget: "string",
					description: "Visible on the page",
					required: false,
				},
				{
					label: "Description",
					name: "description",
					widget: "string",
					description: "The meta description",
				},
				{
					label: "Content",
					name: "content",
					widget: "list",
					fields: [
						{
							label: "Style",
							name: "style",
							widget: "select",
							options: [
								{
									label: "Full width (no image)",
									value: "full",
								},
								{
									label: "Split (Image on right)",
									value: "split-left",
								},
								{
									label: "Split (Image on left)",
									value: "split-right",
								},
							],
						},
						{
							label: "Color Scheme",
							name: "colors",
							widget: "select",
							options: [
								{
									label: "Dark",
									value: "dark",
								},
								{
									label: "Light",
									value: "light",
								},
							],
						},
						{
							label: "Image (keep your file size small, <1mb)",
							name: "image",
							widget: "image",
							required: false,
						},
						{
							label: "Content",
							name: "wysiwyg",
							widget: "markdown",
						},
					],
				}
			],
		}
	]
}