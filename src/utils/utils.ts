function trimTitle(title: string) {
    if (title.length > 50) title = `${title.substring(0, 50)}..`;
    return title;
}

export { trimTitle }