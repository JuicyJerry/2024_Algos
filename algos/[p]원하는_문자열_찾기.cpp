#include <bits/stdc++.h>

using namespace std;

int solution(string myString, string pat) {
    for(auto& it : myString) it = tolower(it);    
    for(auto& it : pat) it = tolower(it);    
    
    if (myString.size() < pat.size()) return 0;
    for(int i = 0; i <= myString.size() - pat.size(); i++) {
        if (myString.substr(i, pat.size()) == pat) {
            return 1;
        }
    }
    
    return 0;
}