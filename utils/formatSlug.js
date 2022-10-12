export const formatSlug = (slug) => {
	return String(slug).trim().replace(/ /g, '-').replace(/--/g, '-');
}