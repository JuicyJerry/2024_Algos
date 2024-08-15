#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, int k) {
    for(auto &it : arr) {
        if (k % 2) {
            it *= k;   
        } else {
            it += k;   
        }
    }
    return arr;
}

// #2
#include <algorithm>
#include <vector>

using namespace std;

vector<int> solution(vector<int> v, int k) {
    transform(v.begin(), v.end(), v.begin(), [k](int x){return k&1 ? x * k : x + k;});
    return v;
}