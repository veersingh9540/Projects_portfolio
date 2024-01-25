import math

import numpy as np
import pandas as pd
from sklearn import linear_model

def SkLearn_GD():
    df = pd.read_csv("test_scores.csv")
    reg = linear_model.LinearRegression()
    reg.fit(df[["math"]], df.cs)
    print(f"Coef  {reg.coef_}, Intercept {reg.intercept_}")

def gradient_descent(x,y):
    m_current = 0
    b_current = 0
    n = len(x)
    iterations = 100
    learning_rate = 0.01
    cost_previous = 0
    for i in range(iterations):
        y_pred = m_current*x + b_current
        cost = (1/n) * sum((y - (y_pred))**2)
        md = -(2/n) * sum(x* (y - (y_pred)))
        bd = -(2 / n) * sum((y - (y_pred)))
        m_current = m_current - learning_rate*md
        b_current = b_current - learning_rate*bd
        if math.isclose(cost, cost_previous, rel_tol=1e-20):
            break
        cost_previous = cost
        print(f"m  {m_current}, b  {b_current}, cost  {cost}, iterations  {i}")

if __name__ == "__main__":
    df = pd.read_csv("test_scores.csv")
    x = np.array(df.math)
    y = np.array(df.cs)

    gradient_descent(x,y)

    SkLearn_GD()