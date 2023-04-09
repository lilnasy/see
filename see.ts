import type { Call, Pipe, Booleans, Numbers, Objects, Strings, Tuples, Unions } from 'https://esm.sh/hotscript@1.0.11'



/***** MAIN *****/

type Image = 
[
    " ███ ",
    "   █ ",
    "  ██ ",
    "   █ ",
    " ███ "
]

type Result = See<Image>






/***** NETWORK *****/

type ImageSerialized = Pipe<
    Image,
    [
        Tuples.Join<''>,
        Strings.Split<''>,
        Tuples.Map<Strings.Compare<' '>>,
        Tuples.Map<Numbers.Equal<1>>
    ]
>

type Retina = {
    1   : ImageSerialized[0]
    2   : ImageSerialized[1]
    3   : ImageSerialized[2]
    4   : ImageSerialized[3]
    5   : ImageSerialized[4]
    6   : ImageSerialized[5]
    7   : ImageSerialized[6]
    8   : ImageSerialized[7]
    9   : ImageSerialized[8]
    10  : ImageSerialized[9]
    11  : ImageSerialized[10]
    12  : ImageSerialized[11]
    13  : ImageSerialized[12]
    14  : ImageSerialized[13]
    15  : ImageSerialized[14]
    16  : ImageSerialized[15]
    17  : ImageSerialized[16]
    18  : ImageSerialized[17]
    19  : ImageSerialized[18]
    20  : ImageSerialized[19]
    21  : ImageSerialized[20]
    22  : ImageSerialized[21]
    23  : ImageSerialized[22]
    24  : ImageSerialized[23]
    25  : ImageSerialized[24]
}

type VisualArea1 = {
    26  : AllAreActive3<Retina, 1, 2, 3>
    27  : AllAreActive3<Retina, 2, 3, 4>
    28  : AllAreActive3<Retina, 3, 4, 5>
    29  : AllAreActive3<Retina, 6, 7, 8>
    30  : AllAreActive3<Retina, 7, 8, 9>
    31  : AllAreActive3<Retina, 8, 9, 10>
    32  : AllAreActive3<Retina, 11, 12, 13>
    33  : AllAreActive3<Retina, 12, 13, 14>
    34  : AllAreActive3<Retina, 13, 14, 15>
    35  : AllAreActive3<Retina, 16, 17, 18>
    36  : AllAreActive3<Retina, 17, 18, 19>
    37  : AllAreActive3<Retina, 18, 19, 20>
    38  : AllAreActive3<Retina, 21, 22, 23>
    39  : AllAreActive3<Retina, 22, 23, 24>
    40  : AllAreActive3<Retina, 23, 24, 25>

    41  : AllAreActive3<Retina, 1, 6, 11>
    42  : AllAreActive3<Retina, 6, 11, 16>
    43  : AllAreActive3<Retina, 11, 16, 21>
    44  : AllAreActive3<Retina, 2, 7, 12>
    45  : AllAreActive3<Retina, 7, 12, 17>
    46  : AllAreActive3<Retina, 12, 17, 22>
    47  : AllAreActive3<Retina, 3, 8, 13>
    48  : AllAreActive3<Retina, 8, 13, 18>
    49  : AllAreActive3<Retina, 13, 18, 23>
    50  : AllAreActive3<Retina, 4, 9, 14>
    51  : AllAreActive3<Retina, 9, 14, 19>
    52  : AllAreActive3<Retina, 14, 19, 24>
    53  : AllAreActive3<Retina, 5, 10, 15>
    54  : AllAreActive3<Retina, 10, 15, 20>
    55  : AllAreActive3<Retina, 15, 20, 25>

    57  : AllAreActive3<Retina, 6, 12, 18>
    60  : AllAreActive3<Retina, 7, 13, 19>
    63  : AllAreActive3<Retina, 8, 14, 20>
    65  : AllAreActive3<Retina, 15, 19, 23>
    66  : AllAreActive3<Retina, 10, 14, 18>
    67  : AllAreActive3<Retina, 14, 18, 22>
    68  : AllAreActive3<Retina, 5, 9, 13>
    69  : AllAreActive3<Retina, 9, 13, 17>
    70  : AllAreActive3<Retina, 13, 17, 21>
    71  : AllAreActive3<Retina, 4, 8, 12>
    72  : AllAreActive3<Retina, 8, 12, 16>
    73  : AllAreActive3<Retina, 3, 7, 11>
    74  : AllAreActive3<Retina, 8, 12, 18>
    75  : AllAreActive3<Retina, 9, 13, 19>
    76  : AllAreActive3<Retina, 10, 14, 20>
}

type VisualArea2 = {
    77  : AllAreActive2<VisualArea1, 26, 41>
    78  : AllAreActive2<VisualArea1, 26, 47>
    79  : AllAreActive2<VisualArea1, 32, 41>
    80  : AllAreActive2<VisualArea1, 32, 47>
    81  : AllAreActive2<VisualArea1, 32, 43>
    82  : AllAreActive2<VisualArea1, 32, 49>
    83  : AllAreActive2<VisualArea1, 38, 43>
    84  : AllAreActive2<VisualArea1, 38, 49>
    85  : AllAreActive2<VisualArea1, 27, 44>
    86  : AllAreActive2<VisualArea1, 27, 50>
    87  : AllAreActive2<VisualArea1, 33, 44>
    88  : AllAreActive2<VisualArea1, 33, 50>
    89  : AllAreActive2<VisualArea1, 33, 46>
    90  : AllAreActive2<VisualArea1, 33, 52>
    91  : AllAreActive2<VisualArea1, 39, 46>
    92  : AllAreActive2<VisualArea1, 39, 52>
    93  : AllAreActive2<VisualArea1, 47, 28>
    94  : AllAreActive2<VisualArea1, 53, 28>
    95  : AllAreActive2<VisualArea1, 34, 47>
    96  : AllAreActive2<VisualArea1, 34, 53>
    97  : AllAreActive2<VisualArea1, 34, 49>
    98  : AllAreActive2<VisualArea1, 34, 55>
    99  : AllAreActive2<VisualArea1, 40, 49>
    100 : AllAreActive2<VisualArea1, 40, 55>
    111 : AllAreActive2<VisualArea1, 41, 42>
    112 : AllAreActive2<VisualArea1, 42, 43>
    113 : AllAreActive2<VisualArea1, 44, 45>
    114 : AllAreActive2<VisualArea1, 45, 46>
    115 : AllAreActive2<VisualArea1, 47, 48>
    116 : AllAreActive2<VisualArea1, 48, 49>
    117 : AllAreActive2<VisualArea1, 50, 51>
    118 : AllAreActive2<VisualArea1, 51, 52>
    119 : AllAreActive2<VisualArea1, 53, 54>
    120 : AllAreActive2<VisualArea1, 54, 55>
    129 : AllAreActive2<VisualArea1, 26, 57>
    130 : AllAreActive2<VisualArea1, 26, 72>
    131 : AllAreActive2<VisualArea1, 38, 57>
    132 : AllAreActive2<VisualArea1, 38, 72>
    133 : AllAreActive2<VisualArea1, 27, 60>
    134 : AllAreActive2<VisualArea1, 27, 69>
    135 : AllAreActive2<VisualArea1, 39, 60>
    136 : AllAreActive2<VisualArea1, 39, 69>
    137 : AllAreActive2<VisualArea1, 28, 63>
    138 : AllAreActive2<VisualArea1, 28, 66>
    139 : AllAreActive2<VisualArea1, 40, 63>
    140 : AllAreActive2<VisualArea1, 40, 66>
    144 : AllAreActive2<VisualArea1, 29, 70>
    145 : AllAreActive2<VisualArea1, 30, 67>
    146 : AllAreActive2<VisualArea1, 31, 65>
    147 : AllAreActive2<VisualArea1, 32, 73>
    148 : AllAreActive2<VisualArea1, 33, 71>
    149 : AllAreActive2<VisualArea1, 34, 68>
    153 : AllAreActive2<VisualArea1, 47, 74>
    154 : AllAreActive2<VisualArea1, 50, 75>
    155 : AllAreActive2<VisualArea1, 53, 76>
}

type VisualArea4 = {
    171 : AllAreActive3<VisualArea2, 78, 81, 83>
    172 : AllAreActive3<VisualArea2, 86, 89, 91>
    173 : AllAreActive3<VisualArea2, 94, 97, 99>
    174 : AllAreActive2<VisualArea2, 130, 132>
    175 : AllAreActive2<VisualArea2, 134, 136>
    176 : AllAreActive2<VisualArea2, 138, 140>
    181 : AllAreActive3<VisualArea2, 78, 82, 84>
    182 : AllAreActive3<VisualArea2, 86, 90, 92>
    183 : AllAreActive3<VisualArea2, 94, 98, 100>
    184 : AllAreActive3<VisualArea2, 78, 84, 153>
    185 : AllAreActive3<VisualArea2, 86, 92, 154>
    186 : AllAreActive3<VisualArea2, 94, 100, 155>
    190 : AllAreActive2<VisualArea2, 79, 116>
    191 : AllAreActive2<VisualArea2, 87, 118>
    192 : AllAreActive2<VisualArea2, 95, 120>
    196 : AllAreActive3<VisualArea2, 77, 82, 84>
    197 : AllAreActive3<VisualArea2, 85, 90, 92>
    198 : AllAreActive3<VisualArea2, 93, 98, 100>
    199 : AllAreActive2<VisualArea2, 129, 131>
    200 : AllAreActive2<VisualArea2, 133, 135>
    201 : AllAreActive2<VisualArea2, 137, 140>
    203 : AllAreActive3<VisualArea2, 79, 83, 84>
    204 : AllAreActive3<VisualArea2, 87, 91, 92>
    205 : AllAreActive3<VisualArea2, 95, 99, 100>
    206 : AllAreActive3<VisualArea2, 82, 83, 147>
    207 : AllAreActive3<VisualArea2, 90, 91, 148>
    208 : AllAreActive3<VisualArea2, 98, 99, 149>
    216 : AllAreActive2<VisualArea2, 78, 115>
    217 : AllAreActive2<VisualArea2, 86, 117>
    218 : AllAreActive2<VisualArea2, 94, 119>
    227 : AllAreActive2<VisualArea2, 130, 131>
    228 : AllAreActive2<VisualArea2, 134, 135>
    229 : AllAreActive2<VisualArea2, 138, 139>
    233 : AllAreActive3<VisualArea2, 78, 79, 116>
    234 : AllAreActive3<VisualArea2, 86, 87, 118>
    235 : AllAreActive3<VisualArea2, 94, 95, 120>
    242 : AllAreActive3<VisualArea2, 77, 88, 118>
    243 : AllAreActive3<VisualArea2, 85, 96, 120>
    245 : AllAreActive3<VisualArea2, 77, 83, 115>
    246 : AllAreActive3<VisualArea2, 85, 91, 117>
    247 : AllAreActive3<VisualArea2, 93, 99, 119>
}

type Complex = {
    291 : AnyAreActive<VisualArea2, [111,113,115,117,119]>
    292 : AnyAreActive<VisualArea2, [112,114,116,118,120]>
    293 : AnyAreActive<VisualArea2, [130,134,138,144,145,146]>
}

type InferiorTemporalGyrus = {
    0 : AnyAreActive<VisualArea4, [245,246,247]>
    1 : AnyAreActive<Complex,     [291,292]>
    2 : AnyAreActive<VisualArea4, [171,172,173,174,175,176]>
    3 : AnyAreActive<VisualArea4, [181,182,183,184,185,186]>
    4 : AnyAreActive<VisualArea4, [190,191,192]>
    5 : AnyAreActive<VisualArea4, [196,197,198,199,200,201]>
    6 : AnyAreActive<VisualArea4, [203,204,205,206,207,208]>
    7 : AnyAreActive<VisualArea4 & Complex, [216,217,218,293]>
    8 : AnyAreActive<VisualArea4, [227,228,229]>
    9 : AnyAreActive<VisualArea4, [233,234,235,242,243]>
}

type PossibleNumbers = Pipe<
    InferiorTemporalGyrus,
    [
        Objects.PickBy<Booleans.Equals<true>>,
        Objects.Keys
    ]
>

type InhibitionOrder = [ 8, 9, 0, 2, 3, 7, 6, 4, 5, 1 ]

type See<Image> = Call<Tuples.Find<Booleans.Extends<PossibleNumbers>>, InhibitionOrder>


/***** UTILITY FUNCTIONS *****/

type AllAreActive2<
    Network,
    X extends keyof Network,
    Y extends keyof Network
> = Call<Booleans.And<Network[X]>, Network[Y]>

type AllAreActive3<
    Network,
    X extends keyof Network,
    Y extends keyof Network,
    Z extends keyof Network
> = Call<Tuples.Every<Booleans.Equals<true>>, [Network[X], Network[Y], Network[Z]]>

type AnyAreActive<
    Network,
    Keys extends (keyof Network)[]
> = Call<
    Tuples.Some<Booleans.Equals<true>>,
    KeysToValues<Network, Keys>
>

type KeysToValues<T, Keys extends (keyof T)[]> = {
  [Index in keyof Keys]: Keys[Index] extends keyof T ? T[Keys[Index]] : never;
}
