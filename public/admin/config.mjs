export default {
	backend: {
		name: "git-gateway",
		repo: "holaplex/enterprise.holaplex.com",
		branch: "master"
	},
	local_backend: true,
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
					label: "Title",
					name: "title",
					widget: "string",
					description: "The meta title displayed on embeds, browser bar, and search engine titles.",
				},
				{
					label: "Description",
					name: "description",
					widget: "string",
					description: "The meta description",
				},
			],
		}
	]
}