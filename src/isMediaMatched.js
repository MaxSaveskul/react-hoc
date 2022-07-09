export const isMediaMatched = (media) => {
	if (!window.matchMedia) return false;
	return window.matchMedia(media).matches;
};