-- Function to replace negative numbers with 0
replaceNegatives :: [Int] -> [Int]
replaceNegatives xs = map (\x -> if x < 0 then 0 else x) xs

-- Main function to run the program
main :: IO ()
main = do
    let result = replaceNegatives [-1, 2, -3, 4]
    print result