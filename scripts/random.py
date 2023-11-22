import os

# Example of bad coding practices
def doSomething():
    a = 10
    b = 20
    c = 30
    result = a + b + c
    print("Result is: " + str(result))
    return result

# Global variables used without necessity
x = 5
y = 10

def calculate():
    global x
    global y
    x = x + 2
    y = y + 3
    print(x)
    return x * y

# Hardcoded file path
def read_file():
    file = open("/path/to/your/file.txt", "r")
    data = file.read()
    print(data)
    file.close()

if __name__ == "__main__":
    doSomething()
    print("Calculate function result: " + str(calculate()))
    read_file()
