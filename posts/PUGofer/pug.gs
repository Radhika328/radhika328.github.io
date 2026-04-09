--5th question
qsn8.x = if x == 1 then 0 else x
result = map.qsn8.[1,2,1,3]
  
--8th question
radhika.x= if x < 0 then 0 else x
gouri = map.radhika.[-1,2,-3,1,-6]

--6th question
--rp.x = if x == 1  then 1 else 0
kb = sum.(map.rp.[1,2,3,1])

sumcubes. x. y. z=if x<=y && y<=z then x^3 + y^3
         else if x<=y && z<=y then x^3+z^3
         else y^3 + z^3

digit.x = if x>0 && x<10 then True else False         

prevlet.x = if x=='a' then 'z'
  else if x=='b' then 'a'
  else if x=='c' then 'b'
  else 'y' 

rad.f=f.3+3
--f.x.y=x+y
--f.x.y=x*y
radhu.f=f.(3.3)+3
--renu.f=f.3+(3.3)
--
--f.g.x=g.(g.x)

cg.x = if x==2 then 0 else x
rr = map.cg.[2,3,4]
                
--pcg.x=if x `mod` 2 ==0 then 1 else 0
--rrp=sum.(map.pcg.[1,2,3,4,5,6])   

pcg.x=if x<0 then -x else x
rrp=map.pcg.[1,-2,3,-4]

cc.x=if x `mod` 2== 0 then -x else x
ab=sum.(map.cc.[1,2,3,4,5,6,7,8,9,10])

one.x = 1 
apply.f.x = f.x
compose.g.f.x = g.(f.x)

namify.(x::xr) = (toUpper.x) :: xr

namify1.(x::xr) = (toLower.x) :: xr

f.g.x=g.(g.x)

nextlet.x = if x=='a' then 'z'
      else if x=='b' then 'a'
      else if x=='c' then 'b'
      else if x=='d' then 'c'
      else if x=='e' then 'd'
      else if x=='f' then 'e'
      else if x=='g' then 'f'
      else if x=='h' then 'g'
      else if x=='i' then 'h'
      else if x=='j' then 'i'
      else if x=='k' then 'j'
      else if x=='l' then 'k'
      else if x=='m' then 'l'
      else if x=='n' then 'm'
      else if x=='o' then 'n'
      else if x=='p' then 'o'
      else if x=='q' then 'p'
      else if x=='r' then 'q'
      else if x=='s' then 'r'
      else if x=='t' then 's'
      else if x=='u' then 't'
      else if x=='v' then 'u'
      else if x=='w' then 'v'
      else if x=='x' then 'w'
      else if x=='y' then 'x'
      else 'y'
two. x = 2
d.g.x=g.(g.x)
 
rp.x=if x<0 then 1 else 0
pg=sum.(map.rp.[-1,-2,3])
inpaires.n=[(x,y) | x <- [1..n], y <- [1..n], x /= y]
tail.(foldl2.(++).[1].[2,3,4])
