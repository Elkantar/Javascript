function getAcceleration(obj){
    let erreur =  'impossible'
        if (typeof(obj.f) == 'number' & typeof(obj.m) == 'number'){
            //let a = obj.F/obj.m
            return obj.f/obj.m
        } else if (typeof(obj.Δv) == 'number' & typeof(obj.Δt) == 'number'){
            //let b = obj.Δv / obj.Δt
            return obj.Δv / obj.Δt
        } else if (typeof(obj.d) == 'number' & typeof(obj.t) == 'number'){
            //let c = (2*obj.d) / (obj.t * obj.t)
            return (2*obj.d) / (obj.t * obj.t)
        }else {
        return erreur
    }
}