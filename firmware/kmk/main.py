import board

from kb import KMKKeyboard

from kmk.keys import KC
from kmk.extensions.media_keys import MediaKeys
from kmk.modules.capsword import CapsWord
from kmk.modules.combos import Chord, Combos
from kmk.modules.holdtap import HoldTap
from kmk.modules.layers import Layers
from kmk.modules.mouse_keys import MouseKeys
from kmk.modules.oneshot import OneShot
from kmk.modules.split import Split, SplitSide

keyboard = KMKKeyboard()
keyboard.modules.append(Layers())

# comment one of these on each side
#split_side = SplitSide.LEFT
split_side = SplitSide.RIGHT
split = Split(
    data_pin=board.GP1, 
    uart_flip=True,
    use_pio=True,
    split_side=split_side)
keyboard.modules.append(split)

keyboard.modules.append(HoldTap())
keyboard.modules.append(MouseKeys()) 
keyboard.modules.append(CapsWord()) 

oneshot = OneShot()
keyboard.modules.append(oneshot)

OS_LCTL = KC.OS(KC.LCTL, tap_time=None)
OS_LSFT = KC.OS(KC.LSFT, tap_time=None)
OS_LGUI = KC.OS(KC.LGUI, tap_time=None)
OS_LALT = KC.OS(KC.LALT, tap_time=None)

OS_LCTL_LSFT = KC.OS(KC.LCTL(OS_LSFT), tap_time=None)
OS_LCTL_LALT = KC.OS(KC.LCTL(OS_LALT), tap_time=None)
OS_LCTL_LGUI = KC.OS(KC.LCTL(OS_LGUI), tap_time=None)
OS_LSFT_LALT = KC.OS(KC.LSFT(OS_LALT), tap_time=None)
OS_LSFT_LGUI = KC.OS(KC.LSFT(OS_LGUI), tap_time=None)
OS_LALT_LGUI = KC.OS(KC.LALT(OS_LGUI), tap_time=None)

OS_LCTL_LSFT_LGUI = KC.OS(KC.LCTL(KC.LSFT(OS_LGUI)), tap_time=None)
OS_LCTL_LSFT_LALT = KC.OS(KC.LCTL(KC.LSFT(OS_LALT)), tap_time=None)
OS_LCTL_LALT_LGUI = KC.OS(KC.LCTL(KC.LALT(OS_LGUI)), tap_time=None)
OS_LSFT_LALT_LGUI = KC.OS(KC.LSFT(KC.LALT(OS_LGUI)), tap_time=None)

OS_LCTL_LSFT_LALT_LGUI = KC.OS(KC.LCTL(KC.LSFT(KC.LALT(OS_LGUI))), tap_time=None)

combos = Combos()
keyboard.modules.append(combos)

combos.combos = [
    Chord((OS_LCTL, OS_LSFT), OS_LCTL_LSFT, timeout=1000),
    Chord((OS_LCTL, OS_LALT), OS_LCTL_LALT, timeout=1000),
    Chord((OS_LCTL, OS_LGUI), OS_LCTL_LGUI, timeout=1000),
    Chord((OS_LSFT, OS_LALT), OS_LSFT_LALT, timeout=1000),
    Chord((OS_LSFT, OS_LGUI), OS_LSFT_LGUI, timeout=1000),
    Chord((OS_LALT, OS_LGUI), OS_LALT_LGUI, timeout=1000),

    Chord((OS_LCTL, OS_LSFT, OS_LGUI), OS_LCTL_LSFT_LGUI, timeout=1000),
    Chord((OS_LCTL, OS_LSFT, OS_LALT), OS_LCTL_LSFT_LALT, timeout=1000),
    Chord((OS_LCTL, OS_LALT, OS_LGUI), OS_LCTL_LALT_LGUI, timeout=1000),
    Chord((OS_LSFT, OS_LALT, OS_LGUI), OS_LSFT_LALT_LGUI, timeout=1000),

   Chord((OS_LCTL, OS_LSFT, OS_LALT, OS_LGUI), OS_LCTL_LSFT_LALT_LGUI, timeout=1000),
]

keyboard.extensions.append(MediaKeys())

# layer taps
L1_TAB = KC.LT(1, KC.TAB)
L2_SPC = KC.LT(2, KC.SPC)
L3_ESC = KC.LT(3, KC.ESC)

# shortcuts
LOCK    = KC.LCTRL(KC.LGUI(KC.Q))

SSHOT     = KC.LGUI(KC.LSFT(KC.N4)) # screenshot
PRV_TAB   = KC.LGUI(KC.LSFT(KC.LBRC))
NXT_TAB   = KC.LGUI(KC.LSFT(KC.RBRC))
PRV_WND   = KC.LGUI(KC.GRV)
ZOOM_P    = KC.LGUI(KC.EQL)
ZOOM_M    = KC.LGUI(KC.MINS)

# aerospace window manager shortcuts
WM_UP = KC.LALT(KC.UP)
WM_DOWN = KC.LALT(KC.DOWN)
WM_LEFT = KC.LALT(KC.LEFT)
WM_RIGHT = KC.LALT(KC.RIGHT)

WM_SRVC = KC.LSFT(KC.LALT(KC.SCLN)) 
WM_JOIN = KC.LSFT(KC.LALT(KC.SLSH)) 
WM_NEXT = KC.LALT(KC.TAB)
WM_NEXT_MNTR = KC.LSFT(KC.LALT(KC.TAB))
WM_INC = KC.LSFT(KC.LALT(KC.EQL))
WM_DEC = KC.LSFT(KC.LALT(KC.MINS))
WM_STACK = KC.LCTRL(KC.LALT(KC.COMM))
WM_TILE = KC.LCTRL(KC.LALT(KC.SLSH))

WM_0 = KC.LCTRL(KC.LALT(KC.N0))
WM_1 = KC.LCTRL(KC.LALT(KC.N1))
WM_2 = KC.LCTRL(KC.LALT(KC.N2))
WM_3 = KC.LCTRL(KC.LALT(KC.N3))
WM_4 = KC.LCTRL(KC.LALT(KC.N4))
WM_5 = KC.LCTRL(KC.LALT(KC.N5))
WM_6 = KC.LCTRL(KC.LALT(KC.N6))
WM_7 = KC.LCTRL(KC.LALT(KC.N7))

keyboard.keymap = [
    [
      KC.Q, KC.W, KC.F, KC.P, KC.B, KC.J, KC.L, KC.U, KC.Y, KC.QUOT,
      KC.A, KC.R, KC.S, KC.T, KC.G, KC.M, KC.N, KC.E, KC.I, KC.O,
      KC.Z, KC.X, KC.C, KC.D, KC.V, KC.K, KC.H, KC.COMM, KC.DOT, KC.SLSH,
      OS_LGUI, KC.ENT, L1_TAB, L3_ESC, L2_SPC, OS_LSFT
    ],
    [
      LOCK, KC.MB_RMB, KC.MS_UP, KC.MB_LMB, KC.MW_UP, KC.PGUP, KC.HOME, KC.UP, KC.END, KC.DEL,
      KC.HYPR, KC.MS_LT, KC.MS_DN, KC.MS_RT, KC.MW_DN, KC.PGDN, KC.LEFT, KC.DOWN, KC.RGHT, KC.BSPC,
      ZOOM_P, ZOOM_M, OS_LALT, OS_LCTL, KC.CW, PRV_TAB, NXT_TAB, PRV_WND, KC.INS, SSHOT,
      KC.RESET, KC.NO, KC.TRNS, KC.VOLU, KC.MUTE, KC.VOLD
    ],
    [
      KC.EXLM, KC.AT, KC.HASH, KC.DLR, KC.PERC, KC.PLUS, KC.EQL, KC.ASTR, KC.UNDS, KC.TILD,
      KC.N1, KC.N2, KC.N3, KC.N4, KC.N5, KC.LBRC, KC.LCBR, KC.LPRN, KC.MINS, KC.GRV,
      KC.N6, KC.N7, KC.N8, KC.N9, KC.N0, KC.RBRC, KC.RCBR, KC.RPRN, KC.PIPE, KC.BSLS,
      KC.AMPR, KC.SCLN, KC.COLN, KC.NO, KC.TRNS, KC.RESET
    ],
    [
      KC.F1, KC.F2, KC.F3, KC.F4, WM_SRVC, WM_UP, WM_0, WM_1, WM_2, WM_3, 
      KC.F5, KC.F6, KC.F7, KC.F8, WM_JOIN, WM_DOWN, WM_4, WM_5, WM_6, WM_7,
      KC.F9, KC.F10, KC.F11, KC.F12, WM_NEXT, WM_LEFT, WM_RIGHT, WM_INC, WM_DEC, WM_NEXT_MNTR,
      WM_STACK, WM_TILE, KC.LSFT, KC.TRNS, KC.NO, KC.RESET
    ]
  ]

if __name__ == "__main__":
    keyboard.go()
