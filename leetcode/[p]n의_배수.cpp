#include<bits/stdc++.h>
using namespace std;

int solution(int num, int n) {
    double mod = num % n;
    return mod == 0 ? 1 : 0;
}