// answer
#include<bits/stdc++.h>
using namespace std;   
string s; 
int main() {
    getline(cin, s);
    for (int i = 0; i < s.size(); i++) {
        if (s[i] >= 65 && s[i] < 97) {
            if (s[i] + 13 > 90) s[i] = s[i] + 13 - 26;
            else s[i] = s[i] + 13;
        } else if (s[i] >= 97 && s[i] <= 122) {
            if (s[i] + 13 > 122) s[i] = s[i] + 13 - 26;
            else s[i] = s[i] + 13;
        }
        cout << s[i];
    }
    return 0;
}


// try2 : success
#include <bits/stdc++.h>
using namespace std;
string s;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    getline(cin, s);
    for(int i = 0; i < s.size(); i++) {
        if (isdigit(s[i]) || s[i] == ' ') {
            cout << s[i];
            continue;
        } else if (isalpha(s[i])) {
            if (isupper(s[i])) {
                cout << char((s[i] - 'A' + 13) % 26 + 'A');
            } else if (islower(s[i])) {
                cout << char((s[i] - 'a' + 13) % 26 + 'a');
            }
        } else {
            cout << s[i];
        }
    }
    
    return 0;
}

// try1 : fail
#include <bits/stdc++.h>
using namespace std;
string s;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    getline(cin, s);
    for(int i = 0; i < s.size(); i++) {
        if (isdigit(s[i]) || s[i] == ' ') {
            cout << s[i];
            continue;
        }
        
        if (s[i] + 13 >= 65 && s[i] + 13 <= 90) {
            if (s[i] + 13 <= 90) {
                cout << char(s[i] + 13);
            } 
        } else if (s[i] + 13 >= 97 && s[i] + 13 <= 122) {
            if (s[i] + 13 <= 122) {
                cout << char(s[i] + 13);
            } 
        } else {
            cout << char(s[i] + 13 - 26);    
        }
    }
    
    return 0;
}