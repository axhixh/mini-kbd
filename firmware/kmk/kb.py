import board

from kmk.kmk_keyboard import KMKKeyboard as _KMKKeyboard
from kmk.scanners.keypad import KeysScanner

_KEY_CFG_LEFT = [
    board.GP15, board.GP26, board.GP27, board.GP28, board.GP29,
    board.GP10, board.GP11, board.GP12, board.GP13, board.GP14,
    board.GP3,  board.GP4,  board.GP5,  board.GP8,  board.GP9,
    board.GP7,  board.GP6,  board.GP2  
]

class KMKKeyboard(_KMKKeyboard):
    def __init__(self):
        self.matrix = KeysScanner(_KEY_CFG_LEFT)
        
        # fmt: off
        self.coord_mapping = [
         0,  1,  2,  3,  4,  22, 21, 20, 19, 18,
         5,  6,  7,  8,  9,  27, 26, 25, 24, 23,
        10, 11, 12, 13, 14,  32, 31, 30, 29, 28,
                15, 16, 17,  35, 34, 33,
        ]
