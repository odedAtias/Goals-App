from random import random
from matplotlib import pyplot as plt
from scipy.stats import linregress
from pandas import read_excel

def scipyLinearRegression(x, y):
    slope, intercept, r, p, std_err = linregress(x, y)
    return slope, intercept

def manuelRegress(x, y):
    ERR = 1.0e-9
    m = len(x)
    alpha = 1e-4
    NumIter = 1.0e+6

    t0 = random()
    t1 = random()

    i = 0
    lastCost = ERR + 1
    dCost = ERR + 1

    #Cost Function
    def Cost():
        res = 0
        for k in range(0, m):  # cost(i) = sum(((H(x) - Y)** 2)) / m / 2;
            res += ((t1 * x[k] + t0) - y[k]) ** 2
        res /= (2 * m)
        return res

    #Find the best Theta`s
    while dCost > ERR and i < NumIter:
        i += 1
        s0 = 0
        s1 = 0

        for j in range(0, m):
            s0 = s0 + (t0 + t1 * x[j] - y[j])
            s1 = s1 + (t0 + t1 * x[j] - y[j]) * x[j]

        cost = Cost()
        dCost = abs(cost - lastCost)

        #Update to the new cost value
        lastCost = cost

        temp0 = t0 - (alpha / m) * s0
        temp1 = t1 - (alpha / m) * s1

        t0 = temp0
        t1 = temp1
    return t0, t1


def main():
    df = read_excel('Lab_Results.xlsx')
    x = df['בדיקה'][1:].to_list()
    y = df['סיכוי לחלות במחלה '][1:].to_list()
    slope, intercept = scipyLinearRegression(x, y)
    t0, t1 = manuelRegress(x, y)

    print("For manuel :", t0, t1)
    print("For Auto :", intercept, slope)

    def spicyLinearfunc(x):
        return slope * x + intercept

    def manualLinearfunc(x):
        return t1 * x + t0

    myModel1 = list(map(spicyLinearfunc, x))
    myModel2 = list(map(manualLinearfunc, x))

    plt.scatter(x, y)
    plt.title('Dose-Response graph (ex1), slope:' + str(slope)[:6])
    plt.xlabel(str(slope)[:7])
    plt.ylabel('Incidence (#)')
    plt.plot(x, myModel1, label="test")
    plt.plot(x, myModel2)
    plt.legend()
    plt.show()

if __name__ == "__main__":
    main()

