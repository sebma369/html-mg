mg.showUI(__html__)
mg.on('drop', (dropEvent: DropEvent) => {
    const {dropMetadata, absoluteX, absoluteY} = dropEvent;
    mg.createNodeFromSvgAsync(dropMetadata.svg)
      .then((frame) => {
        mg.document.currentPage.appendChild(frame)
        frame.x = absoluteX - frame.width / 2,
        frame.y = absoluteY - frame.height / 2,
        mg.document.currentPage.selection = [frame]
        mg.commitUndo();
      })
  })