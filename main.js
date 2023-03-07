mg.showUI(__html__)
mg.on('drop', function (dropEvent) {
    var dropMetadata = dropEvent.dropMetadata, absoluteX = dropEvent.absoluteX, absoluteY = dropEvent.absoluteY;
    mg.createNodeFromSvgAsync(dropMetadata.svg)
        .then(function (frame) {
        mg.document.currentPage.appendChild(frame);
        frame.x = absoluteX - frame.width / 2,
            frame.y = absoluteY - frame.height / 2,
            mg.document.currentPage.selection = [frame];
        mg.commitUndo();
    });
});
