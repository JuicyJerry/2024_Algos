#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr1, vector<int> arr2) {
    int len1 = arr1.size();
    int len2 = arr2.size();
    int sum1 = 0;
    int sum2 = 0;
    
    if (len1 > len2) return 1;
    else if (len1 < len2) return -1;
    else {
        for (auto &it : arr1) sum1 += it;            
        for (auto &it : arr2) sum2 += it;            
        
        if (sum1 > sum2) return 1;
        else if (sum1 < sum2) return -1;
        else return 0;
    }
}