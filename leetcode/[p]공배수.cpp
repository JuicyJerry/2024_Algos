#include<bits/stdc++.h>
using namespace std;

int solution(int number, int n, int m) {
    double mod1 = number % n;
    double mod2 = number % m;
    return (mod1 == 0 && mod2 == 0) ? 1 : 0; 
}