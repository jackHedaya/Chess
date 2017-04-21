// Copyright Jack Hedaya (c) 2017 Copyright Holder All Rights Reserved.

function possibleRook(board, y, x) {
  var possibleTiles = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  possibleTiles[y][x] = 2;

  for (var j = y - 1; j >= 0; j--) {
    if (board[j][x] > 10) {
      possibleTiles[j][x] = 1;
      break
    } else if (board[j][x] === 0) {
      possibleTiles[j][x] = 1;
    } else {
      break;
    }
  }

  for (var j = x + 1; j < 8; j++) {
    if (board[y][j] > 10) {
      possibleTiles[y][j] = 1;
      break
    } else if (board[y][j] === 0) {
      possibleTiles[y][j] = 1;
    } else {
      break;
    }
  }

  for (var j = x - 1; j >= 0; j--) {
    if (board[y][j] > 10) {
      possibleTiles[y][j] = 1;
      break;
    } else if (board[y][j] === 0) {
      possibleTiles[y][j] = 1;
    } else {
      break;
    }
  }

  for (var j = y + 1; j < 8; j++) {
    if (board[j][x] > 10) {
      possibleTiles[j][x] = 1;
      break;
    } else if (board[j][x] === 0) {
      possibleTiles[j][x] = 1;
    } else {
      break;
    }
  }

  return possibleTiles;
}

function possibleKnight(board, y, x) {
  var possibleTiles = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  possibleTiles[y][x] = 2;

  if (checkForAcceptableValue(y - 2) && checkForAcceptableValue(x - 1)) {
    if (isNotWhitePiece(board[y - 2][x - 1])) {
      possibleTiles[y - 2][x - 1] = 1;
    }
  }

  if (checkForAcceptableValue(y + 2) && checkForAcceptableValue(x - 1)) {
    if (isNotWhitePiece(board[y + 2][x - 1])) {
      possibleTiles[y + 2][x - 1] = 1;
    }
  }

  if (checkForAcceptableValue(y - 2) && checkForAcceptableValue(x + 1)) {
    if (isNotWhitePiece(board[y - 2][x + 1])) {
      possibleTiles[y - 2][x + 1] = 1;
    }
  }

  if (checkForAcceptableValue(y + 2) && checkForAcceptableValue(x + 1)) {
    if (isNotWhitePiece(board[y + 2][x + 1])) {
      possibleTiles[y + 2][x + 1] = 1;
    }
  }

  if (checkForAcceptableValue(y + 1) && checkForAcceptableValue(x + 2)) {
    if (isNotWhitePiece(board[y + 1][x + 2])) {
      possibleTiles[y + 1][x + 2] = 1;
    }
  }

  if (checkForAcceptableValue(y + 1) && checkForAcceptableValue(x - 2)) {
    if (isNotWhitePiece(board[y + 1][x - 2]))
    {
      possibleTiles[y + 1][x - 2] = 1;
    }
  }

  if (checkForAcceptableValue(y - 1) && checkForAcceptableValue(x - 2)) {
    if (isNotWhitePiece(board[y - 1][x - 2]))
    {
      possibleTiles[y - 1][x - 2] = 1;
    }
  }

  if (checkForAcceptableValue(y - 1) && checkForAcceptableValue(x + 2)) {
    if (isNotWhitePiece(board[y - 1][x + 2]))
    {
      possibleTiles[y - 1][x + 2] = 1;
    }
  }

  return possibleTiles;
}

function possiblePawn(board, y, x) {
  var possibleTiles = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  possibleTiles[y][x] = 2;

  if (board[y - 1][x] === 0) {
    possibleTiles[y - 1][x] = 1;

    if (y === 6 && board[y - 2][x] === 0) {
      possibleTiles[y - 2][x] = 1;
    }
  }

  if (board[y - 1][x - 1] > 10) {
    possibleTiles[y - 1][x - 1] = 1;
  }

  if (board[y - 1][x + 1] > 10) {
    possibleTiles[y - 1][x + 1] = 1;
  }

  return possibleTiles
}


  return possibleTiles
}
