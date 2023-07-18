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
split_side = SplitSide.LEFT
#split_side = SplitSide.RIGHT
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

# cleaner key names
_______ = KC.TRNS
XXXXXXX = KC.NO

# layer taps
L1_ESC = KC.LT(1, KC.ESC)
L2_SPC = KC.LT(2, KC.SPC)
L3_BSPC = KC.LT(3, KC.BSPC)

# shortcuts
BREAK   = KC.LCTRL(KC.C)
LOCK    = KC.LCTRL(KC.LGUI(KC.Q))

UNDO    = KC.LGUI(KC.Z)
CUT     = KC.LGUI(KC.X)
COPY    = KC.LGUI(KC.C)
PASTE   = KC.LGUI(KC.V)

FSCRN     = KC.LCTRL(KC.LALT(KC.F))# rectangle - full screen without maximizing or creating new desktop
WM_LEADER = KC.LCTRL(KC.LALT)
SSHOT     = KC.LGUI(KC.LSFT(KC.N4)) # screenshot
PRV_TAB   = KC.LGUI(KC.LSFT(KC.LBRC))
NXT_TAB   = KC.LGUI(KC.LSFT(KC.RBRC))
PRV_WND   = KC.LGUI(KC.GRV)
ZOOM_P    = KC.LGUI(KC.EQL)
ZOOM_0    = KC.LGUI(KC.N0)
ZOOM_M    = KC.LGUI(KC.MINS)

keyboard.keymap = [
    [
      KC.Q, KC.W, KC.F, KC.P, KC.B, KC.J, KC.L, KC.U, KC.Y, KC.QUOT,
      KC.A, KC.R, KC.S, KC.T, KC.G, KC.M, KC.N, KC.E, KC.I, KC.O,
      KC.Z, KC.X, KC.C, KC.D, KC.V, KC.K, KC.H, KC.COMM, KC.DOT, KC.SLSH,
      OS_LGUI, KC.ENT, L1_ESC, L3_BSPC, L2_SPC, OS_LSFT
    ],
    [
      LOCK, KC.MB_RMB, KC.MS_UP, KC.MB_LMB, KC.MW_UP, KC.PGUP, KC.HOME, KC.UP, KC.END, KC.DEL,
      PRV_WND, KC.MS_LT, KC.MS_DN, KC.MS_RT, KC.MW_DN, KC.PGDN, KC.LEFT, KC.DOWN, KC.RGHT, KC.BSPC,
      KC.CW, BREAK, OS_LALT, OS_LCTL, WM_LEADER, PRV_TAB, NXT_TAB, FSCRN, KC.INS, UNDO,
      KC.RESET, KC.NO, KC.TRNS, SSHOT, KC.TAB, KC.CW
    ],
    [
      KC.EXLM, KC.AT, KC.HASH, KC.DLR, KC.PERC, KC.PLUS, KC.EQL, KC.ASTR, KC.UNDS, KC.TILD,
      KC.N1, KC.N2, KC.N3, KC.N4, KC.N5, KC.LBRC, KC.LCBR, KC.LPRN, KC.MINS, KC.GRV,
      KC.N6, KC.N7, KC.N8, KC.N9, KC.N0, KC.RBRC, KC.RCBR, KC.RPRN, KC.PIPE, KC.BSLS,
      KC.AMPR, KC.SCLN, KC.COLN, KC.RESET, KC.TRNS, KC.NO
    ],
    [
      KC.F1, KC.F2, KC.F3, KC.F4, ZOOM_P, KC.VOLU, KC.BRIU, KC.NO, KC.NO, KC.NO, 
      KC.F5, KC.F6, KC.F7, KC.F8, ZOOM_0, KC.MUTE, KC.NO, KC.NO, KC.NO, KC.NO,
      KC.F9, KC.F10, KC.F11, KC.F12, ZOOM_M, KC.VOLD, KC.BRID, KC.NO, KC.NO, KC.NO,
      CUT, COPY, PASTE, KC.TRNS, KC.NO, KC.RESET
    ]
  ]

if __name__ == "__main__":
    keyboard.go()