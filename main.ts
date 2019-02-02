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
     * @param n 表示する数値。, eg: 2048
     * @param s 表示開始位置。, eg: 0
     * @param w 表示桁数。, eg: 4
     */
    //% blockId="show_soroban_number" block="show a number %n start %s width %w"
    //% weight=100 blockGap=8
    export function showNumber(n: number,s:number=0,w:number=5): void {
        let wn=Math.abs(n)
        for(let i=s+w-1;i>=s;i--){
            let d=wn % 10
            if(wn==0){
                led.unplot(i, 0)
                led.unplot(i, 1)
                if(n<=0) led.plot(i,2); else led.unplot(i,2);
                led.unplot(i, 3)
                led.unplot(i, 4)
            }else{
                if(d>=5) led.plot(i,0); else led.unplot(i, 0);
                d=d % 5
                if(d>=4) led.plot(i, 1); else led.unplot(i, 1)
                if (d >= 3) led.plot(i, 2); else led.unplot(i, 2)
                if (d >= 2) led.plot(i, 3); else led.unplot(i, 3)
                if (d >= 1) led.plot(i, 4); else led.unplot(i, 4)
                wn = Math.trunc(wn / 10)
            }
        }
    }
}
