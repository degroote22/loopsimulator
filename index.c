#include <stdio.h>
#include <emscripten.h>
#define true 1
#define false 0

extern void reset();
extern void light(int i, int r, int g, int b);
extern void delay(int ms);
extern void printjs(float speed);
extern long int millis();
extern int digitalRead(int k);

#include "custom.c"

int main(int argc, char **argv)
{
    emscripten_set_main_loop(loop, 500, 1);
}
