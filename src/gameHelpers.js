export const STAGE_WIDTH = 12;
// Row width
export const STAGE_HEIGHT = 20;
// Colum height

export const createStage = () => (
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
    // The tetrominos stays within the stag; then it also means that there is nothing in the cell
    )
)