let obj = {
    test: function(){
        // this = obj
        console.log(this);
        function test() {
            console.log(this); // α
        }
        // αにおいて、グローバルオブジェクトを参照（non-strict モード）
        test();
        // callを使うとαにおいてもobjを参照
        test.call(this);
    }
}


const bocchi = {
    name: 'Gotoh Hitori',
    part: 'Guitar',
    callName: function(){
        console.log(this.name);
    },
    callPart: function () {
        setTimeout(function(){
            // bind(this) がないとthisはグローバルオブジェクトを指す
            console.log(this.part); 
        }.bind(this), 1000);
    },
    callPartWithArrow: function() {
        setTimeout(() => {
            // アロー関数を使うとthisはこのオブジェクトを指す
            console.log(this.part);
        }, 1000);
    },
    callPartWithSelf: function() {
        // bind(this)と同じ動作をする
        const self = this;
        setTimeout(function() {
            console.log(self.part);
        }, 1000);
    }
}

bocchi.callName();
bocchi.callPartWithArrow();
bocchi.callPartWithSelf();
