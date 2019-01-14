/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon=""
namespace soroban {
    /**
     * TODO: 数値をそろばん形式で表示する
     * @param n 数値。, eg: 2048
     */
    //% blockId="show_soroban_number" block="show a number %n"
    //% weight=100 blockGap=8
    export function showNumber(n: number): void {
        let wn=n
        for(let i=4;i>=0;i--){
            let d=wn % 10
            wn=Math.trunc(wn/10)
            if(d>=5) led.plot(i,0); else led.unplot(i, 0);
            d=d % 5
            if(d>=4) led.plot(i, 1); else led.unplot(i, 1)
            if (d >= 3) led.plot(i, 2); else led.unplot(i, 2)
            if (d >= 2) led.plot(i, 3); else led.unplot(i, 3)
            if (d >= 1) led.plot(i, 4); else led.unplot(i, 4)
        }
    }
}
