--6. Define a function sumsqrs which takes three numbers and returns the sum of the squares of the larger two.
sumsqrs.x.y.z = if x<=y && x<=z then y^2 + z^2
          else if y<=z then x^2 + z^2
          else x^2 + y^2

--7. Define a function vowel that takes a character and returns true if it is a vowel and false otherwise          
vowel.a= if a=='a' || a=='i' || a=='o' || a=='e' || a=='u' then True else False

--8.Define a function nextlet which takes a letter of the alphabet and returns the letter coming immediately after it. Assume that letter A follows Z.
nextlet.x = if x=='a' then 'b'
      else if x=='b' then 'c'
      else if x=='c' then 'd'
      else if x=='d' then 'e'
      else if x=='e' then 'f'
      else if x=='f' then 'g'
      else if x=='g' then 'h'
      else if x=='h' then 'i'
      else if x=='i' then 'j'
      else if x=='j' then 'k'
      else if x=='k' then 'l'
      else if x=='l' then 'm'
      else if x=='m' then 'n'
      else if x=='n' then 'o'
      else if x=='o' then 'p'
      else if x=='p' then 'q'
      else if x=='q' then 'r'
      else if x=='r' then 's'
      else if x=='s' then 't'
      else if x=='t' then 'u'
      else if x=='u' then 'v'
      else if x=='v' then 'w'
      else if x=='w' then 'x'
      else if x=='x' then 'y'
      else if x=='y' then 'z'
      else 'a'

--9. Define a function namify that takes a string and capitalises the first character.
namify.(x::xr) = (toUpper.x) :: xr

--10. Construct a function, analyze, which takes three positive numbers a, b, c in nondecreasing order, representing the lengths of the sides of a possible triangle.
triangle.a.b.c = if a==b && b==c then 1
                 else if a==b || b==c ||c==a then 2
                 else if a+b<c || b+c<a || a+c<b then 0
                 else 3