import './App.css'
import oneSol from './assets/oneSolution.jpg'
import empty from './assets/emptySet.jpg'
import infinity from './assets/infiniteSolutions.jpg'
import {useEffect, useState} from "react";

function App() {

    const [res, setRes] = useState(false)
    const [disable, setDisable] = useState(true)
    const [result, setResult] = useState('')
    const [a11, setA11] = useState(0)
    const [a12, setA12] = useState(0)
    const [a13, setA13] = useState(0)
    const [a21, setA21] = useState(0)
    const [a22, setA22] = useState(0)
    const [a23, setA23] = useState(0)
    const [a31, setA31] = useState(0)
    const [a32, setA32] = useState(0)
    const [a33, setA33] = useState(0)
    const [b1, setB1] = useState(0)
    const [b2, setB2] = useState(0)
    const [b3, setB3] = useState(0)

    useEffect(() => {
        if (a11 && a12 && a13 && a21 && a22 && a23 && a31 && a32 && a33 && b1 && b2 && b3) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [a11, a12, a13, a21, a22, a23, a31, a32, a33, b1, b2, b3])

    function handle() {
        let det = (a11 * a22 * a33 + a12 * a23 * a31 + a21 * a32 * a13) - (a13 * a22 * a31 + a12 * a21 * a33 + a11 * a23 * a32);
        let detX = (b1 * a22 * a33 + b2 * a32 * a13 + a12 * a23 * b3) - (a13 * a22 * b3 + a12 * b2 * a33 + a23 * a32 * b1);
        let detY = (a11 * b2 * a33 + b1 * a23 * a31 + a21 * b3 * a13) - (a13 * b2 * a31 + b1 * a21 * a33 + a23 * b3 * a11);
        let detZ = (a11 * a22 * b3 + a21 * a32 * b1 + a12 * b2 * a31) - (b1 * a22 * a31 + b2 * a32 * a11 + a12 * a21 * b3);

        if ((det === 0) && (detX === 0) && (detY === 0) && (detZ === 0)) {
            setResult("Sistema cheksiz ko`p yechimga ega !");
        } else if ((det === 0 && detX !== 0) || (det === 0 && detY !== 0) || (det === 0 && detZ !== 0)) {
            setResult("Sistema yechimga ega emas !");
        } else {
            setResult('x = ' + detX / det + '; y = ' + detY / det + '; z = ' + detZ / det + ';')
        }

        setRes(true)
    }

    return <div className={'container-fluid bg-dark py-5'}>
        <p className="text-warning text-center title-text">Chiziqli tenglamalar sistemasini Kramer qoidasi <br/> bilan
            yechish</p>
        <p className="text-secondary text-center warning-text">Sistemaga tartib bo'yicha barcha argumentlarni
            kiriting <br/> va tugmani
            bosing</p>
        <p className="text-center text-danger danger-text">Argumentlar butun son bo'lishi kerak ( Kasr son <br/> qabul
            qilinmaydi, manfiy
            son bo'lishi mumkin ... )</p>
        <div className="row text-center text-white my-5">
            <div>
                <input type="number" placeholder={'a11'} onChange={(e) => setA11(e.target.value)}/> x +
                <input type="number" placeholder={'a12'} onChange={(e) => setA12(e.target.value)}/> y +
                <input type="number" placeholder={'a13'} onChange={(e) => setA13(e.target.value)}/> z =
                <input type="number" placeholder={'b1'} onChange={(e) => setB1(e.target.value)}/>
            </div>
            <div className={'my-3'}>
                <input type="number" placeholder={'a21'} onChange={(e) => setA21(e.target.value)}/> x +
                <input type="number" placeholder={'a22'} onChange={(e) => setA22(e.target.value)}/> y +
                <input type="number" placeholder={'a23'} onChange={(e) => setA23(e.target.value)}/> z =
                <input type="number" placeholder={'b2'} onChange={(e) => setB2(e.target.value)}/>
            </div>
            <div>
                <input type="number" placeholder={'a31'} onChange={(e) => setA31(e.target.value)}/> x +
                <input type="number" placeholder={'a32'} onChange={(e) => setA32(e.target.value)}/> y +
                <input type="number" placeholder={'a33'} onChange={(e) => setA33(e.target.value)}/> z =
                <input type="number" placeholder={'b3'} onChange={(e) => setB3(e.target.value)}/>
            </div>
        </div>
        <div className={'text-center'}>
            <button className={'btn btn-success'} onClick={handle} disabled={disable}>Natijani ko'rish</button>
        </div>
        {res && <div className="row mt-3">
            <div className="col-6">
                <p className={'text-center text-warning mt-5 warning-text'}>Natija : {result}</p>
            </div>
            <div className="col-6 text-center">
                <img
                    src={result === 'Sistema cheksiz ko`p yechimga ega !' ? infinity : result === 'Sistema yechimga ega emas !' ? empty : oneSol}
                    alt="graph" className={'img-thumbnail mt-5'}/>
            </div>
        </div>}
    </div>
}

export default App;