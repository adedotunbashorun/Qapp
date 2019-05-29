<template>
    <div class="main-content-container container-fluid px-4">
            <!-- Page Header -->
        <div class="page-header row no-gutters py-4">
            <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span class="text-uppercase page-subtitle">Dashboard</span>
            <h3 class="page-title">Welcome {{ user.first_name + ' ' + user.last_name}}</h3>
            </div>
        </div>
        <!-- End Page Header -->
        <!-- Small Stats Blocks -->
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Users</span>
                    <h6 class="stats-small__value count my-3">{{result.users_count}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--increase"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Questions</span>
                    <h6 class="stats-small__value count my-3">{{result.questions_count}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--increase"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Schedules</span>
                    <h6 class="stats-small__value count my-3">{{result.schedules_count}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--decrease"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Schedules Sent</span>
                    <h6 class="stats-small__value count my-3">{{result.schedules_sent}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--decrease"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Response</span>
                    <h6 class="stats-small__value count my-3">{{result.responses_count}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--increase"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Failed Response</span>
                    <h6 class="stats-small__value count my-3">{{result.schedules_failed}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--increase"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                </div>
            </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div class="stats-small stats-small--1 card card-small">
                <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                    <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">Total Archieve</span>
                    <h6 class="stats-small__value count my-3">{{result.archieves_count}}</h6>
                    </div>
                    <div class="stats-small__data">
                    <span class="stats-small__percentage stats-small__percentage--increase"></span>
                    </div>
                </div>
                <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['user','result'],
}
</script>
