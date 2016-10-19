#include <iostream>

using namespace std;

class Number
{
private:
    int r, i;
public:
    Number(int re=0, int im=0):r(re), i(im) {};
    friend Number operator+ (const Number &, const Number &);
    void out();
};
Number operator+ (const Number &a, const Number &b)
{
    Number c;
    c.r = a.r+b.r;
    c.i = a.i+b.i;
    return c;
}

void Number::out()
{
    cout << this->r;
    if (this->i > 0) cout << "+" << this->i << "i";
    else cout << this->i << "i";
    cout << endl;
}

int main()
{
    Number a = Number (10, 10);
    Number b = Number (2, 3);
    a.out();
    b.out();
    (a+b).out();
    Number sum ;
    sum = a+b;
    sum.out();
    return 0;
}
