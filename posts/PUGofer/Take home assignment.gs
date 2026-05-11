--(2) question
factors.n = [x | x <- upto.(n-1), (mod.n.x) == 0]
upto.0 = []
upto.n = upto.(n-1) ++ [n]
isPerfect.n =
    if sum.(factors.n) == n
    then True
    else False
perfects.n = [x | x <- upto.n, isPerfect.x]
--This code finds all numbers up to n whose divisors (excluding the number itself) add up to the number.
--It then returns all such perfect numbers from 1 to n.

--(4) question
luhnDouble.x =
    if (2 * x) > 9
    then (2 * x) - 9
    else (2 * x)
luhn4.a.b.c.d =
    let total = luhnDouble.a + b + luhnDouble.c + d
    in if mod.total.10 == 0
       then True
       else False
-- luhnDouble.x doubles a digit and subtracts 9 if the result is greater than 9 (digit normalization).
-- luhn4 applies this to 4 digits, sums them, and returns True if the total is divisible by 10 (valid number), otherwise False.


--(5) question
altMap.f.g.[] = []
altMap.f.g.(x::xs) = f.x :: altMap.g.f.xs
--For the first element it uses f, for the second it uses g, then keeps switching.
--It processes the list recursively and builds a new list with the results.

--(1) question
--(a) first principles
upperall.[] = []
upperall.(x::xs) = toUpper.x :: upperall.xs
--If the string is empty, return empty.
--Otherwise, convert the first letter to uppercase and do the same for the rest.

--(b) Using map
uppermap.r = map.toUpper.r
--take a string r and change every letter in it to uppercase using map and toUpper

--c) Using foldr
upperfold.u = foldr.(\x xs -> toUpper.x :: xs).[].u
--It goes through the string one character at a time and converts each letter to uppercase.
--Then it rebuilds a new string using foldr starting from an empty list.
