function generateTOC(insertBefore, heading, startLv) {
    var container = jQuery("<div id='tocBlock1'></div>");
    var div = jQuery("<ul id='toc'></ul>");
    var content = jQuery(insertBefore).first();

    if (heading) {
        container.append('<span class="tocHeading">' + heading + '</span>');
    }

    if (startLv === undefined) { startLv = 1; }

    div.tableOfContents(content, { startLevel: startLv });
    container.append(div);
    container.insertBefore(insertBefore);
}