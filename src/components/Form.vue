<script>
export default {
    name: 'Form'
}
</script>

<template>
    <div class="form">
        <div class="row">
            <div class="mb-3 col-6">
                <label for="firstname" class="form-label">First Name</label>
                <input type="email" class="form-control" id="firstname" >
            </div>
            <div class="mb-3 col-6">
                <label for="lastname" class="form-label">Lastname</label>
                <input type="email" class="form-control" id="lastname" placeholder="name@example.com">
            </div>
            <div class="mb-3 col-12">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3 col-12">
                <label for="content" class="form-label">Content</label>
                <textarea class="form-control" id="content" rows="3"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>

<style scoped lang="scss"></style>